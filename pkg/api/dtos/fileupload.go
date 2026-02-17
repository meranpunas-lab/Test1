package dtos

type FileUploadResponse struct {
	Success  bool   `json:"success"`
	FileName string `json:"fileName"`
	FilePath string `json:"filePath"`
}

type FileInfo struct {
	Name string `json:"name"`
	Url  string `json:"url"`
}
