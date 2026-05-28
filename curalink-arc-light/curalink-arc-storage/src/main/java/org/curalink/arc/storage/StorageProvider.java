package org.curalink.arc.storage;

import org.curalink.arc.conf.StorageDescriptor;

/**
 * @author Gunter Zeilinger <gunterze@gmail.com>
 * @since Jul 2015
 */
public interface StorageProvider {

    Storage openStorage(StorageDescriptor descriptor);
}
