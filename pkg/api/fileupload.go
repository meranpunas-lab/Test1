package api

import (
  "fmt"
  "io"
  "net/http"
  "os"
  "path/filepath"

  "github.com/grafana/grafana/pkg/api/dtos"
  "github.com/grafana/grafana/pkg/models"
  "github.com/grafana/grafana/pkg/api/response"
)

// FileUploadHandler handles file uploads
func (hs *HTTPServer) FileUploadHandler(c *models.ReqContext) response.Response {
	file, header, err := c.Req.FormFile("file")
	if err != nil {
		return response.Error(http.StatusBadRequest, "Failed to get file", err)
	}
	defer file.Close()

	dir := "uploaded_files"
	os.MkdirAll(dir, 0755)
	filePath := filepath.Join(dir, header.Filename)
	out, err := os.Create(filePath)
	if err != nil {
		return response.Error(http.StatusInternalServerError, "Failed to save file", err)
	}
	defer out.Close()

	_, err = io.Copy(out, file)
	if err != nil {
		return response.Error(http.StatusInternalServerError, "Failed to write file", err)
	}

	return response.JSON(http.StatusOK, dtos.FileUploadResponse{Success: true, FileName: header.Filename, FilePath: filePath})
}

// FileListHandler lists uploaded files
func (hs *HTTPServer) FileListHandler(c *models.ReqContext) response.Response {
	dir := "uploaded_files"
	files := []dtos.FileInfo{}
	entries, err := os.ReadDir(dir)
	if err != nil {
		return response.Error(http.StatusInternalServerError, "Failed to list files", err)
	}
	for _, entry := range entries {
		if !entry.IsDir() {
			files = append(files, dtos.FileInfo{Name: entry.Name(), Url: fmt.Sprintf("/static/%s/%s", dir, entry.Name())})
		}
	}
	return response.JSON(http.StatusOK, files)
}
