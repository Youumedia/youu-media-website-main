"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import supabase from "@/lib/supabase";

export default function VerifyDatabase() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchApplications() {
      try {
        setLoading(true);
        console.log("Fetching applications from database...");
        
        const { data, error } = await supabase
          .from("FreelancerApplications")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(10);

        if (error) {
          console.error("Database error:", error);
          setError(`Database error: ${error.message}`);
          return;
        }

        console.log("Applications fetched:", data);
        setApplications(data || []);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(`Fetch error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchApplications();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>Database Verification - Freelancer Applications</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2">Loading applications...</p>
            </div>
          ) : error ? (
            <div className="text-red-600 bg-red-50 p-4 rounded">
              <h3 className="font-semibold">Error:</h3>
              <p>{error}</p>
            </div>
          ) : applications.length === 0 ? (
            <div className="text-yellow-600 bg-yellow-50 p-4 rounded">
              <h3 className="font-semibold">No Applications Found</h3>
              <p>No freelancer applications have been submitted yet.</p>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-green-600">
                  ✅ {applications.length} Application{applications.length !== 1 ? 's' : ''} Found
                </h3>
                <p className="text-sm text-gray-600">
                  Database connection is working! Applications are being saved.
                </p>
              </div>
              
              <div className="space-y-4">
                {applications.map((app, index) => (
                  <div key={app.id || index} className="border rounded p-4 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-600">{app.full_name}</h4>
                        <p className="text-sm text-gray-600">{app.email}</p>
                        {app.phone_number && (
                          <p className="text-sm text-gray-600">📞 {app.phone_number}</p>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        <p>📅 {new Date(app.created_at).toLocaleString()}</p>
                        {app.availability && (
                          <p>⏰ {app.availability}</p>
                        )}
                        {app.experience_years && (
                          <p>💼 {app.experience_years} years experience</p>
                        )}
                      </div>
                    </div>
                    {app.about_you && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-700">
                          <strong>About:</strong> {app.about_you.substring(0, 100)}
                          {app.about_you.length > 100 ? '...' : ''}
                        </p>
                      </div>
                    )}
                    {app.skills && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-700">
                          <strong>Skills:</strong> {app.skills}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
