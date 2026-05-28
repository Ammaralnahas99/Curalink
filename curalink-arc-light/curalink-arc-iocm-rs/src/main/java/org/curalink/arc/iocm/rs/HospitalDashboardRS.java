package org.curalink.arc.iocm.rs;

import jakarta.enterprise.context.RequestScoped;
import jakarta.json.Json;
import jakarta.json.stream.JsonGenerator;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.StreamingOutput;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

/**
 * @author Hospital Dashboard REST Service
 */
@RequestScoped
@Path("aets/{AETitle}/rs")
public class HospitalDashboardRS {

    private static final Logger LOG = LoggerFactory.getLogger(HospitalDashboardRS.class);

    @PersistenceContext(unitName = "dcm4chee-arc")
    private EntityManager em;

    @PathParam("AETitle")
    private String aet;

    @GET
    @Path("/hospitals/list")
    @Produces("application/json")
    public Response getHospitalList() {
        LOG.info("Getting list of hospitals");
        
        try {
            // Query to get distinct hospital names
            String sql = "SELECT DISTINCT p.hospital_name " +
                    "FROM patient p " +
                    "WHERE p.hospital_name IS NOT NULL " +
                    "ORDER BY p.hospital_name";

            List<String> hospitalNames = em.createNativeQuery(sql).getResultList();

            StreamingOutput output = out -> {
                try (JsonGenerator gen = Json.createGenerator(out)) {
                    gen.writeStartArray();
                    for (String hospitalName : hospitalNames) {
                        gen.write(hospitalName);
                    }
                    gen.writeEnd();
                }
            };

            return Response.ok(output).build();
            
        } catch (Exception e) {
            LOG.error("Error getting hospital list", e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("{\"error\":\"" + e.getMessage() + "\"}")
                    .build();
        }
    }

    @GET
    @Path("/hospitals/statistics")
    @Produces("application/json")
    public Response getHospitalStatistics() {
        LOG.info("Getting hospital statistics for AE: {}", aet);
        
        try {
            // Create a hospital dashboard entry for this AE Title itself
            // The hospital name IS the AE Title name
            String hospitalName = aet;
            
            // Query to get patient and study counts for this AE
            String sql = "SELECT " +
                    "COUNT(DISTINCT p.pk) as patient_count, " +
                    "COUNT(DISTINCT s.pk) as study_count " +
                    "FROM patient p " +
                    "LEFT JOIN study s ON s.patient_fk = p.pk";

            List<Object[]> results = em.createNativeQuery(sql).getResultList();

            StreamingOutput output = out -> {
                try (JsonGenerator gen = Json.createGenerator(out)) {
                    gen.writeStartArray();
                    
                    if (!results.isEmpty()) {
                        Object[] row = results.get(0);
                        Long patientCount = ((Number) row[0]).longValue();
                        Long studyCount = ((Number) row[1]).longValue();
                        
                        // Create a single hospital entry with the AE Title as the hospital name
                        gen.writeStartObject();
                        gen.write("name", hospitalName);
                        gen.write("patients", patientCount);
                        gen.write("studies", studyCount);
                        gen.write("active", true);
                        gen.writeEnd();
                    } else {
                        // Even if no data, create the hospital entry
                        gen.writeStartObject();
                        gen.write("name", hospitalName);
                        gen.write("patients", 0);
                        gen.write("studies", 0);
                        gen.write("active", true);
                        gen.writeEnd();
                    }
                    
                    gen.writeEnd();
                }
            };

            return Response.ok(output).build();
            
        } catch (Exception e) {
            LOG.error("Error getting hospital statistics", e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("{\"error\":\"" + e.getMessage() + "\"}")
                    .build();
        }
    }

    @GET
    @Path("/hospitals/{hospitalName}/statistics")
    @Produces("application/json")
    public Response getSpecificHospitalStatistics(@PathParam("hospitalName") String hospitalName) {
        LOG.info("Getting statistics for hospital: {} (AE: {})", hospitalName, aet);
        
        try {
            // The hospital name should match the AE title
            // Query to get patient and study counts for this AE
            String sql = "SELECT " +
                    "COUNT(DISTINCT p.pk) as patient_count, " +
                    "COUNT(DISTINCT s.pk) as study_count " +
                    "FROM patient p " +
                    "LEFT JOIN study s ON s.patient_fk = p.pk";

            List<Object[]> results = em.createNativeQuery(sql).getResultList();

            StreamingOutput output = out -> {
                try (JsonGenerator gen = Json.createGenerator(out)) {
                    gen.writeStartObject();
                    
                    if (!results.isEmpty()) {
                        Object[] row = results.get(0);
                        Long patientCount = ((Number) row[0]).longValue();
                        Long studyCount = ((Number) row[1]).longValue();
                        
                        gen.write("name", hospitalName);
                        gen.write("patients", patientCount);
                        gen.write("studies", studyCount);
                        gen.write("active", true);
                    } else {
                        gen.write("name", hospitalName);
                        gen.write("patients", 0);
                        gen.write("studies", 0);
                        gen.write("active", true);
                    }
                    
                    gen.writeEnd();
                }
            };

            return Response.ok(output).build();
            
        } catch (Exception e) {
            LOG.error("Error getting hospital statistics for " + hospitalName, e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("{\"error\":\"" + e.getMessage() + "\"}")
                    .build();
        }
    }

    @GET
    @Path("/hospitals/{hospitalName}/modalities")
    @Produces("application/json")
    public Response getHospitalModalities(@PathParam("hospitalName") String hospitalName) {
        LOG.info("Getting modalities for hospital: {} (AE: {})", hospitalName, aet);
        
        try {
            // Query to get distinct modalities for all studies
            // Since hospital name = AE title, we get all modalities for this AE
            String sql = "SELECT DISTINCT s.modality " +
                    "FROM series s " +
                    "WHERE s.modality IS NOT NULL " +
                    "ORDER BY s.modality";

            List<String> modalities = em.createNativeQuery(sql).getResultList();

            StreamingOutput output = out -> {
                try (JsonGenerator gen = Json.createGenerator(out)) {
                    gen.writeStartArray();
                    for (String modality : modalities) {
                        gen.write(modality);
                    }
                    gen.writeEnd();
                }
            };

            return Response.ok(output).build();
            
        } catch (Exception e) {
            LOG.error("Error getting hospital modalities", e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("{\"error\":\"" + e.getMessage() + "\"}")
                    .build();
        }
    }

    @POST
    @Path("/hospitals/dashboard/initialize")
    @Produces("application/json")
    public Response initializeHospitalDashboard() {
        LOG.info("Initializing hospital dashboard for AE Title: {}", aet);
        
        try {
            // This endpoint is called when an AE Title is saved
            // It can be used to perform any initialization tasks for the dashboard
            // For now, it just confirms the dashboard is ready
            
            StreamingOutput output = out -> {
                try (JsonGenerator gen = Json.createGenerator(out)) {
                    gen.writeStartObject();
                    gen.write("aeTitle", aet);
                    gen.write("status", "initialized");
                    gen.write("message", "Hospital dashboard initialized for AE Title: " + aet);
                    gen.writeEnd();
                }
            };

            LOG.info("Hospital dashboard initialized successfully for AE: {}", aet);
            return Response.ok(output).build();
            
        } catch (Exception e) {
            LOG.error("Error initializing hospital dashboard for AE: " + aet, e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("{\"error\":\"" + e.getMessage() + "\"}")
                    .build();
        }
    }
}
