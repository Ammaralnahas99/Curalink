package org.curalink.arc.store;

import org.curalink.arc.conf.ArchiveCompressionRule;
import org.curalink.arc.conf.Availability;
import org.curalink.arc.conf.ExportReoccurredInstances;
import org.curalink.arc.conf.RejectionNote;
import org.curalink.data.Attributes;
import org.curalink.data.Code;
import org.curalink.arc.conf.*;
import org.curalink.arc.entity.Instance;
import org.curalink.arc.entity.Location;
import org.curalink.arc.entity.RejectedInstance;
import org.curalink.arc.entity.Study;
import org.curalink.arc.storage.ReadContext;
import org.curalink.arc.storage.WriteContext;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

/**
 * @author Gunter Zeilinger <gunterze@gmail.com>
 * @author Vrinda Nayak <vrinda.nayak@j4care.com>
 * @since Jul 2015
 */
public interface StoreContext {

    StoreSession getStoreSession();

    String getSopClassUID();

    String getSopInstanceUID();

    String getMppsInstanceUID();

    String getReceiveTranferSyntax();

    void setReceiveTransferSyntax(String transferSyntax);

    String getStoreTranferSyntax();

    void setStoreTranferSyntax(String storeTranferSyntaxUID);

    ArchiveCompressionRule getCompressionRule();

    void setCompressionRule(ArchiveCompressionRule compressionRule);

    String getAcceptedStudyInstanceUID();

    void setAcceptedStudyInstanceUID(String acceptedStudyInstanceUID);

    int getMoveOriginatorMessageID();

    void setMoveOriginatorMessageID(int moveOriginatorMessageID);

    String getMoveOriginatorAETitle();

    void setMoveOriginatorAETitle(String moveOriginatorAETitle);

    Attributes getAttributes();

    void setAttributes(Attributes dataset);

    ReadContext getReadContext();

    void setReadContext(ReadContext readContext);

    Collection<WriteContext> getWriteContexts();

    Attributes getCoercedAttributes();

    void setCoercedAttributes(Attributes coercedAttributes);

    String getStudyInstanceUID();

    String getSeriesInstanceUID();

    WriteContext getWriteContext(Location.ObjectType objectType);

    void setWriteContext(Location.ObjectType objectType, WriteContext writeCtx);

    RejectionNote getRejectionNote();

    void setRejectionNote(RejectionNote rejectionNote);

    RejectedInstance getRejectedInstance();

    void setRejectedInstance(RejectedInstance rejectedInstance);

    Exception getException();

    void setException(Exception ex);

    Instance getPreviousInstance();

    void setPreviousInstance(Instance previousInstance);

    Instance getStoredInstance();

    void setStoredInstance(Instance storedInstance);

    List<Location> getLocations();

    String[] getRetrieveAETs();

    void setRetrieveAETs(String... retrieveAETs);

    Availability getAvailability();

    void setAvailability(Availability availability);

    LocalDate getExpirationDate();

    void setExpirationDate(LocalDate expirationDate);

    boolean isPreviousDifferentStudy();

    boolean isPreviousDifferentSeries();

    Code getImpaxReportPatientMismatch();

    void setImpaxReportPatientMismatch(Code impaxReportPatientMismatch);

    Study getCreatedStudy();

    void setCreatedStudy(Study createdStudy);

    boolean match(ExportReoccurredInstances exportReoccurredInstances);
}


