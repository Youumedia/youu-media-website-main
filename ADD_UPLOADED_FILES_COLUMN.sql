-- Add uploaded_files column to freelancer_applications table
-- This column will store JSON data about the files users intended to upload

ALTER TABLE freelancer_applications 
ADD COLUMN uploaded_files TEXT;

-- Add a comment to explain what this column contains
COMMENT ON COLUMN freelancer_applications.uploaded_files IS 'JSON string containing array of file objects with name, size, type, and lastModified properties';

-- Example of what will be stored in this column:
-- [{"name":"portfolio.pdf","size":2621440,"type":"application/pdf","lastModified":1699123456789}]
