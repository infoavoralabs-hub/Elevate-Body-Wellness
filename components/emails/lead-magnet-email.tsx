import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Button,
} from "@react-email/components";
import * as React from "react";

interface LeadMagnetEmailProps {
  name?: string;
  downloadUrl: string;
}

export const LeadMagnetEmail = ({
  name,
  downloadUrl,
}: LeadMagnetEmailProps) => (
  <Html>
    <Head />
    <Preview>Your 5-Minute Morning Mobility Guide is here!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Elevate Body Wellness</Heading>
        <Text style={text}>
          Hi {name || "there"},
        </Text>
        <Text style={text}>
          Thank you for joining the Elevate Body Wellness community. As promised, here is your free guide:
        </Text>
        <Text style={text}>
          <strong>The 5-Minute Morning Mobility Routine</strong>
        </Text>
        
        <Button href={downloadUrl} style={button}>
          Download Your PDF Guide
        </Button>

        <Text style={text}>
          If you have any questions or are ready to take your wellness journey to the next level, feel free to reply directly to this email.
        </Text>
        
        <Text style={footer}>
          Stay Elevating,<br />
          The Elevate Body Wellness Team
        </Text>
        
        <Text style={unsubscribe}>
          Don&apos;t want these emails? <Link href="{{unsubscribe_url}}" style={anchor}>Unsubscribe</Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default LeadMagnetEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "16px",
  lineHeight: "26px",
  padding: "0 40px",
};

const button = {
  backgroundColor: "#D4AF37", // Gold
  borderRadius: "4px",
  color: "#111", // Charcoal
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "250px",
  margin: "30px auto",
  padding: "14px 7px",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  lineHeight: "22px",
  padding: "0 40px",
  marginTop: "30px",
};

const unsubscribe = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  padding: "0 40px",
  marginTop: "10px",
  textAlign: "center" as const,
};

const anchor = {
  color: "#2754C5",
  textDecoration: "underline",
};
