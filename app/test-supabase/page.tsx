"use client";

import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

export default function TestSupabase() {
  const [status, setStatus] = useState("Testing...");
  const [envVars, setEnvVars] = useState({});

  useEffect(() => {
    // Check environment variables
    setEnvVars({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Present" : "Missing",
    });

    // Test Supabase connection
    async function testConnection() {
      try {
        setStatus("Testing Supabase connection...");
        
        const { data, error } = await supabase
          .from("FreelancerApplications")
          .select("count")
          .limit(1);
        
        if (error) {
          setStatus(`❌ Error: ${error.message}`);
        } else {
          setStatus("✅ Supabase connection successful!");
        }
      } catch (err) {
        setStatus(`❌ Connection failed: ${err.message}`);
      }
    }

    testConnection();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Environment Variables:</h2>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(envVars, null, 2)}
          </pre>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Connection Status:</h2>
          <p className="text-lg">{status}</p>
        </div>
      </div>
    </div>
  );
}
