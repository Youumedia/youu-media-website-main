"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import supabase from "@/lib/supabase";

export default function TestDatabaseInsert() {
  const { toast } = useToast();
  const [isTesting, setIsTesting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const testDatabaseInsert = async () => {
    setIsTesting(true);
    setResult(null);

    try {
      console.log("Testing database insert...");

      const testData = {
        full_name: "Test User",
        email: "test@example.com",
        phone_number: "123-456-7890",
        portfolio_url: "https://test-portfolio.com",
        skills: "Video Editing, Photography",
        availability: "Full-time",
        experience_years: "5",
        about_you:
          "This is a test application to verify database functionality.",
        equipment_software: "Adobe Premiere, Canon EOS R5",
        day_rate: "£400-500",
      };

      console.log("Inserting test data:", testData);

      const { data, error } = await supabase
        .from("freelancer_applications")
        .insert([testData]);

      console.log("Database response:", { data, error });

      if (error) {
        console.error("Database error:", error);
        setResult(`❌ ERROR: ${error.message}`);
        toast({
          title: "Database Test Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        console.log("✅ Database insert successful!");
        setResult("✅ SUCCESS: Test application inserted successfully!");
        toast({
          title: "Database Test Passed",
          description: "Test application was saved to the database",
        });
      }
    } catch (err) {
      console.error("Test error:", err);
      setResult(`❌ CRITICAL ERROR: ${err.message}`);
      toast({
        title: "Test Failed",
        description: "Something went wrong during the test",
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>Database Insert Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            This page tests whether the database insert functionality is working
            properly. Click the button below to insert a test application.
          </p>

          <Button
            onClick={testDatabaseInsert}
            disabled={isTesting}
            className="w-full"
          >
            {isTesting ? (
              <>
                <div className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Testing Database Insert...
              </>
            ) : (
              "Test Database Insert"
            )}
          </Button>

          {result && (
            <div
              className={`p-4 rounded ${
                result.includes("✅")
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              <h3 className="font-semibold mb-2">Test Result:</h3>
              <p>{result}</p>
            </div>
          )}

          <div className="text-sm text-gray-500">
            <p>
              <strong>What this test does:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Creates a test application with sample data</li>
              <li>
                Attempts to insert it into the FreelancerApplications table
              </li>
              <li>Shows success or error message</li>
              <li>
                You can verify the result by visiting{" "}
                <code>/verify-database</code>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
