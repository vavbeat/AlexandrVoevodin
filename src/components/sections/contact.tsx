import React from "react";
import { config } from "@/data/config";
import { Card } from "../ui/card";
import CardDescription from "../ui/CardDescription";

function ContactSection() {
  return (
    <Card>
      <CardDescription>
        <a
          href={`mailto:${config.email}`}
          className="text-gray-200 cursor-can-hover rounded-lg"
        >
          {config.email} <span className="text-gray-500 ml-2">or</span> drop your info here.
        </a>
      </CardDescription>
    </Card>
  );
}

// ✅ Ensure default export is correctly formatted
export default ContactSection;
