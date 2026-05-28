package org.curalink.arc.exporter;

import org.curalink.arc.conf.ExporterDescriptor;
import org.curalink.arc.qmgt.Outcome;

/**
 * @author Gunter Zeilinger <gunterze@gmail.com>
 * @since Oct 2015
 */
public interface Exporter {
    ExporterDescriptor getExporterDescriptor();

    ExportContext createExportContext();

    Outcome export(ExportContext exportContext) throws Exception;
}
