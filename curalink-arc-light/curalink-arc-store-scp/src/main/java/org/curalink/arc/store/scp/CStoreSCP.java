package org.curalink.arc.store.scp;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Typed;
import jakarta.inject.Inject;
import org.curalink.data.Attributes;
import org.curalink.data.Tag;
import org.curalink.net.Association;
import org.curalink.net.PDVInputStream;
import org.curalink.net.pdu.PresentationContext;
import org.curalink.net.service.BasicCStoreSCP;
import org.curalink.net.service.DicomService;
import org.curalink.util.SafeClose;
import org.curalink.arc.store.StoreContext;
import org.curalink.arc.store.StoreService;
import org.curalink.arc.store.StoreSession;

import java.io.IOException;

/**
 * @author Gunter Zeilinger <gunterze@gmail.com>
 * @since Jul 2015
 */
@ApplicationScoped
@Typed(DicomService.class)
class CStoreSCP extends BasicCStoreSCP {

    @Inject
    private StoreService storeService;

    @Override
    protected void store(Association as, PresentationContext pc, Attributes rq, PDVInputStream data, Attributes rsp)
            throws IOException {
        StoreSession session = getStoreSession(as);
        StoreContext ctx = newStoreContext(session, pc, rq);
        storeService.store(ctx, data);
    }

    private StoreContext newStoreContext(StoreSession session,  PresentationContext pc, Attributes rq) {
        StoreContext ctx = storeService.newStoreContext(session);
        ctx.setReceiveTransferSyntax(pc.getTransferSyntax());
        ctx.setMoveOriginatorMessageID(rq.getInt(Tag.MoveOriginatorMessageID, 0));
        ctx.setMoveOriginatorAETitle(rq.getString(Tag.MoveOriginatorApplicationEntityTitle));
        return ctx;

    }

    private StoreSession getStoreSession(Association as) {
        StoreSession session = as.getProperty(StoreSession.class);
        if (session == null) {
            session = storeService.newStoreSession(as);
            as.setProperty(StoreSession.class, session);
        }
        return session;
    }

    @Override
    public void onClose(Association as) {
        SafeClose.close(as.getProperty(StoreSession.class));
    }
}

