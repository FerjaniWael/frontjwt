package com.bezkoder.spring.login.security.services;

import java.io.UnsupportedEncodingException;
import java.util.Properties;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.Transport;
/*import org.springframework.boot.rsocket.server.RSocketServer.Transport;*/

public class EmailSender {

	/*public static void sendUserCredentials(String recipientEmail, String username, String password) {
        final String senderEmail = "wael.ferjani@esprit.tn";
        final String senderPassword = "taxawfduxqipjktq"; // Replace with the actual password

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(senderEmail, senderPassword);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(senderEmail));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipientEmail));
            message.setSubject("User Registration Details");
            message.setText("Dear User,\n\nThank you for registering. Here are your login credentials:\n\n"
                    + "Username: " + username + "\nPassword: " + password + "\n\nPlease keep this information secure."
                    + "\n\nBest regards,\nYour Application Team");

            Transport.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }*/
	public static void sendUserCredentials(String recipientEmail, String username, String password) {
	    final String senderEmail = "wael.ferjani@esprit.tn";
	    final String senderPassword = "taxawfduxqipjktq"; // Replace with the actual password

	    Properties props = new Properties();
	    props.put("mail.smtp.auth", "true");
	    props.put("mail.smtp.starttls.enable", "true");
	    props.put("mail.smtp.host", "smtp.gmail.com");
	    props.put("mail.smtp.port", "587");

	    Session session = Session.getInstance(props, new Authenticator() {
	        protected PasswordAuthentication getPasswordAuthentication() {
	            return new PasswordAuthentication(senderEmail, senderPassword);
	        }
	    });

	    try {
	        Message message = new MimeMessage(session);
	        message.setFrom(new InternetAddress(senderEmail));
	        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipientEmail));
	        message.setSubject("User Registration Details");

	        // Create the HTML part
	        String htmlContent = "<!DOCTYPE html>\n" +
	                "<html lang=\"en\">\n" +
	                "<head>\n" +
	                "    <meta charset=\"UTF-8\">\n" +
	                "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
	                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
	                "    <title>Bootstrap 5 Thank You Example</title>\n" +
	                "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n" +
	                "</head>\n" +
	                "<body>\n" +
	                "    <div class=\"vh-100 d-flex justify-content-center align-items-center\">\n" +
	                "        <div class=\"card col-md-4 bg-white shadow-md p-5\">\n" +
	                "            <div class=\"mb-4 text-center\">\n" +
	                "                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"text-success\" width=\"75\" height=\"75\"\n" +
	                "                    fill=\"currentColor\" class=\"bi bi-check-circle\" viewBox=\"0 0 16 16\">\n" +
	                "                    <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\" />\n" +
	                "                    <path\n" +
	                "                        d=\"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z\" />\n" +
	                "                </svg>\n" +
	                "            </div>\n" +
	                "            <div class=\"text-center\">\n" +
	                "                <h1>Thank You !</h1>\n" +
	                "                <p>We've sent the link to your inbox. Lorem ipsum dolor sit,lorem lorem </p>\n" +
	                "                <button class=\"btn btn-outline-success\">Back Home</button>\n" +
	                "            </div>\n" +
	                "        </div>\n" +
	                "    </div>\n" +
	                "</body>\n" +
	                "</html>";

	        // Create a multipart message
	        Multipart multipart = new MimeMultipart();

	        // Create the text part
	        MimeBodyPart textPart = new MimeBodyPart();
	        textPart.setText("Dear User,\n\nThank you for registering. Here are your login credentials:\n\n"
	                + "Username: " + username + "\nPassword: " + password + "\n\nPlease keep this information secure."
	                + "\n\nBest regards,\nYour Application Team");

	        // Create the HTML part
	        MimeBodyPart htmlPart = new MimeBodyPart();
	        htmlPart.setContent(htmlContent, "text/html");

	        // Add the parts to the multipart message
	        multipart.addBodyPart(textPart);
	        multipart.addBodyPart(htmlPart);

	        // Set the multipart message as the content of the email
	        message.setContent(multipart);

	        // Send the email
	        Transport.send(message);
	    } catch (MessagingException  e) {
	        e.printStackTrace();
	    }
}
}
