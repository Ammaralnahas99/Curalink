package org.curalink.arc.ui2;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.wildfly.security.http.oidc.IDToken;
import org.wildfly.security.http.oidc.OidcSecurityContext;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = "/index")
public class SelectLangServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try (PrintWriter out = resp.getWriter()) {
            out.print("<html><head><script>");
            setLang(req, out);
            out.println("window.location.href=`/dcm4chee-arc/ui2/${lang}/index.html`;</script></head></html>");
        }
    }

    private void setLang(HttpServletRequest req, PrintWriter out) {
        OidcSecurityContext ksc = (OidcSecurityContext) req.getAttribute(OidcSecurityContext.class.getName());
        if (ksc != null) {
            IDToken idToken = ksc.getIDToken();
            if (idToken != null) {
                String locale = idToken.getLocale();
                if (locale != null && locale.length() >= 2) {
                    String lang = locale.substring(0, 2);
                    switch (lang) {
                        case "de":
                        case "en":
                        case "es":
                        case "hi":
                        case "it":
                        case "ja":
                        case "mr":
                        case "pt":
                        case "ru":
                        case "fr":
                        case "zh":
                            out.print("const lang='" + lang + "';");
                            return;
                    }
                }
            }
        }
        out.print("const lang=localStorage.getItem('current_language')||'en';");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    }
}
