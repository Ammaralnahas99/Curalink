package org.curalink.arc.storage.filesystem;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import org.curalink.arc.conf.StorageDescriptor;
import org.curalink.arc.metrics.MetricsService;
import org.curalink.arc.storage.Storage;
import org.curalink.arc.storage.StorageProvider;

/**
 * @author Gunter Zeilinger <gunterze@gmail.com>
 * @since Jul 2015
 */
@ApplicationScoped
@Named("file")
class FileSystemStorageProvider implements StorageProvider {
    @Inject
    private MetricsService metricsService;

    @Override
    public Storage openStorage(StorageDescriptor descriptor) {
        return new FileSystemStorage(descriptor, metricsService);
    }
}
