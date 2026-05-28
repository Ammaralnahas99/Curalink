package org.curalink.arc.qmgt;

import org.curalink.arc.entity.Task;

/**
 * @author Gunter Zeilinger <gunterze@gmail.com>
 * @since Oct 2015
 */
public class Outcome {

    private final Task.Status status;
    private final String description;

    public Outcome(Task.Status status, String description) {
        this.status = status;
        this.description = description;
    }

    public Task.Status getStatus() {
        return status;
    }

    public String getDescription() {
        return description;
    }
}
