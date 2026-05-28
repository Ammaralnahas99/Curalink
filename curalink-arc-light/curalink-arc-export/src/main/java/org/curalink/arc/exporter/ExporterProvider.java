package org.curalink.arc.exporter;

import org.curalink.arc.conf.ExporterDescriptor;

/**
 * @author Gunter Zeilinger <gunterze@gmail.com>
 * @since Oct 2015
 */
public interface ExporterProvider {

    Exporter getExporter(ExporterDescriptor descriptor);
}
