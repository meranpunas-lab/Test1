import React, { useState, useEffect } from 'react';

const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    
    try {
      const response = await fetch('/api/fileupload/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setSelectedFile(null);
        fetchFiles();
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
    setUploading(false);
  };

  const fetchFiles = async () => {
    try {
      const response = await fetch('/api/fileupload/list');
      const data = await response.json();
      setFiles(data || []);
    } catch (error) {
      console.error('Failed to fetch files:', error);
    }
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ background: '#1e1e1e', color: '#fff', minHeight: '100vh', padding: '32px' }}>
      {/* Upload Section */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', marginBottom: '24px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: 500 }}>
              Upload File
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              style={{
                padding: '8px 12px',
                background: '#2a2a2a',
                border: '1px solid #444',
                borderRadius: '4px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            />
          </div>
          <button
            onClick={handleUpload}
            disabled={uploading || !selectedFile}
            style={{
              background: uploading || !selectedFile ? '#555' : '#33A2E5',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: uploading || !selectedFile ? 'not-allowed' : 'pointer',
              fontSize: '13px',
              fontWeight: 500,
            }}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </div>

      {/* Search Box */}
      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Search file by name, URL..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '300px',
            padding: '8px 12px',
            background: '#2a2a2a',
            border: '1px solid #444',
            borderRadius: '4px',
            color: '#fff',
            fontSize: '13px',
          }}
        />
      </div>

      {/* Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #444' }}>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#999' }}>
              File Name
            </th>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#999' }}>
              URL
            </th>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#999' }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredFiles.length === 0 ? (
            <tr>
              <td colSpan={3} style={{ padding: '32px 12px', textAlign: 'center', color: '#888' }}>
                {files.length === 0 ? 'No files uploaded yet.' : 'No files match your search.'}
              </td>
            </tr>
          ) : (
            filteredFiles.map((file: any, idx: number) => (
              <tr key={idx} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: '12px', fontSize: '13px', color: '#fff' }}>
                  {file.name}
                </td>
                <td style={{ padding: '12px', fontSize: '13px', color: '#999' }}>
                  {file.url}
                </td>
                <td style={{ padding: '12px', fontSize: '13px' }}>
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#33A2E5',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      marginRight: '12px',
                    }}
                  >
                    View
                  </a>
                  <a
                    href={file.url}
                    download
                    style={{
                      color: '#33A2E5',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FileUploadPage;
