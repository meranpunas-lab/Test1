"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FileUploadPage"],{

/***/ "./public/app/features/fileupload/FileUploadPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchFiles();
  }, []);

  const handleFileChange = e => {
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
        body: formData
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

  const filteredFiles = files.filter(file => file.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: {
      background: '#1e1e1e',
      color: '#fff',
      minHeight: '100vh',
      padding: '32px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        marginBottom: '32px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-end',
          gap: '12px',
          marginBottom: '24px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
            style: {
              display: 'block',
              marginBottom: '8px',
              fontSize: '13px',
              fontWeight: 500
            },
            children: "Upload File"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "file",
            onChange: handleFileChange,
            style: {
              padding: '8px 12px',
              background: '#2a2a2a',
              border: '1px solid #444',
              borderRadius: '4px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '13px'
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: handleUpload,
          disabled: uploading || !selectedFile,
          style: {
            background: uploading || !selectedFile ? '#555' : '#33A2E5',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: uploading || !selectedFile ? 'not-allowed' : 'pointer',
            fontSize: '13px',
            fontWeight: 500
          },
          children: uploading ? 'Uploading...' : 'Upload'
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        marginBottom: '16px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "text",
        placeholder: "Search file by name, URL...",
        value: searchTerm,
        onChange: e => setSearchTerm(e.target.value),
        style: {
          width: '300px',
          padding: '8px 12px',
          background: '#2a2a2a',
          border: '1px solid #444',
          borderRadius: '4px',
          color: '#fff',
          fontSize: '13px'
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          style: {
            borderBottom: '1px solid #444'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            style: {
              padding: '12px',
              textAlign: 'left',
              fontSize: '12px',
              fontWeight: 600,
              color: '#999'
            },
            children: "File Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            style: {
              padding: '12px',
              textAlign: 'left',
              fontSize: '12px',
              fontWeight: 600,
              color: '#999'
            },
            children: "URL"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            style: {
              padding: '12px',
              textAlign: 'left',
              fontSize: '12px',
              fontWeight: 600,
              color: '#999'
            },
            children: "Actions"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
        children: filteredFiles.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tr", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            colSpan: 3,
            style: {
              padding: '32px 12px',
              textAlign: 'center',
              color: '#888'
            },
            children: files.length === 0 ? 'No files uploaded yet.' : 'No files match your search.'
          })
        }) : filteredFiles.map((file, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          style: {
            borderBottom: '1px solid #333'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            style: {
              padding: '12px',
              fontSize: '13px',
              color: '#fff'
            },
            children: file.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            style: {
              padding: '12px',
              fontSize: '13px',
              color: '#999'
            },
            children: file.url
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
            style: {
              padding: '12px',
              fontSize: '13px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: file.url,
              target: "_blank",
              rel: "noopener noreferrer",
              style: {
                color: '#33A2E5',
                textDecoration: 'none',
                cursor: 'pointer',
                marginRight: '12px'
              },
              children: "View"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: file.url,
              download: true,
              style: {
                color: '#33A2E5',
                textDecoration: 'none',
                cursor: 'pointer'
              },
              children: "Download"
            })]
          })]
        }, idx))
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileUploadPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0dMLElBQUksQ0FBQ0M7QUFEUixZQURGLGVBSUU7QUFBSSxpQkFBSyxFQUFFO0FBQUVNLGNBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CSyxjQUFBQSxRQUFRLEVBQUUsTUFBN0I7QUFBcUNQLGNBQUFBLEtBQUssRUFBRTtBQUE1QyxhQUFYO0FBQUEsc0JBQ0dMLElBQUksQ0FBQ3lCO0FBRFIsWUFKRixlQU9FO0FBQUksaUJBQUssRUFBRTtBQUFFbEIsY0FBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJLLGNBQUFBLFFBQVEsRUFBRTtBQUE3QixhQUFYO0FBQUEsb0NBQ0U7QUFDRSxrQkFBSSxFQUFFWixJQUFJLENBQUN5QixHQURiO0FBRUUsb0JBQU0sRUFBQyxRQUZUO0FBR0UsaUJBQUcsRUFBQyxxQkFITjtBQUlFLG1CQUFLLEVBQUU7QUFDTHBCLGdCQUFBQSxLQUFLLEVBQUUsU0FERjtBQUVMcUIsZ0JBQUFBLGNBQWMsRUFBRSxNQUZYO0FBR0xWLGdCQUFBQSxNQUFNLEVBQUUsU0FISDtBQUlMVyxnQkFBQUEsV0FBVyxFQUFFO0FBSlIsZUFKVDtBQUFBO0FBQUEsY0FERixlQWNFO0FBQ0Usa0JBQUksRUFBRTNCLElBQUksQ0FBQ3lCLEdBRGI7QUFFRSxzQkFBUSxNQUZWO0FBR0UsbUJBQUssRUFBRTtBQUNMcEIsZ0JBQUFBLEtBQUssRUFBRSxTQURGO0FBRUxxQixnQkFBQUEsY0FBYyxFQUFFLE1BRlg7QUFHTFYsZ0JBQUFBLE1BQU0sRUFBRTtBQUhILGVBSFQ7QUFBQTtBQUFBLGNBZEY7QUFBQSxZQVBGO0FBQUEsV0FBU1EsR0FBVCxDQURGO0FBUkosUUFkRjtBQUFBLE1BN0RGO0FBQUEsSUFERjtBQTZIRCxDQW5MRDs7QUFxTEEsaUVBQWVwRCxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZmlsZXVwbG9hZC9GaWxlVXBsb2FkUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZpbGVVcGxvYWRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdXBsb2FkaW5nLCBzZXRVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRmlsZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgIHNldFNlbGVjdGVkRmlsZShlLnRhcmdldC5maWxlc1swXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkRmlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZWxlY3RlZEZpbGUpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2ZpbGV1cGxvYWQvdXBsb2FkJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHNldFNlbGVjdGVkRmlsZShudWxsKTtcbiAgICAgICAgZmV0Y2hGaWxlcygpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgZmFpbGVkOicsIGVycm9yKTtcbiAgICB9XG4gICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaEZpbGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2ZpbGV1cGxvYWQvbGlzdCcpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldEZpbGVzKGRhdGEgfHwgW10pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZmlsZXM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZEZpbGVzID0gZmlsZXMuZmlsdGVyKGZpbGUgPT5cbiAgICBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMWUxZTFlJywgY29sb3I6ICcjZmZmJywgbWluSGVpZ2h0OiAnMTAwdmgnLCBwYWRkaW5nOiAnMzJweCcgfX0+XG4gICAgICB7LyogVXBsb2FkIFNlY3Rpb24gKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzMycHgnIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZ2FwOiAnMTJweCcsIG1hcmdpbkJvdHRvbTogJzI0cHgnIH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiAnOHB4JywgZm9udFNpemU6ICcxM3B4JywgZm9udFdlaWdodDogNTAwIH19PlxuICAgICAgICAgICAgICBVcGxvYWQgRmlsZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHggMTJweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyYTJhMmEnLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNDQ0JyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4J1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17dXBsb2FkaW5nIHx8ICFzZWxlY3RlZEZpbGV9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cGxvYWRpbmcgfHwgIXNlbGVjdGVkRmlsZSA/ICcjNTU1JyA6ICcjMzNBMkU1JyxcbiAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHgnLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgICBjdXJzb3I6IHVwbG9hZGluZyB8fCAhc2VsZWN0ZWRGaWxlID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dXBsb2FkaW5nID8gJ1VwbG9hZGluZy4uLicgOiAnVXBsb2FkJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFNlYXJjaCBCb3ggKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzE2cHgnIH19PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZmlsZSBieSBuYW1lLCBVUkwuLi5cIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMzAwcHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzhweCAxMnB4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMmEyYTJhJyxcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNDQ0JyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBUYWJsZSAqL31cbiAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyB9fT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzQ0NCcgfX0+XG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEycHgnLCB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcxMnB4JywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJyM5OTknIH19PlxuICAgICAgICAgICAgICBGaWxlIE5hbWVcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEycHgnLCB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcxMnB4JywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJyM5OTknIH19PlxuICAgICAgICAgICAgICBVUkxcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEycHgnLCB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcxMnB4JywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJyM5OTknIH19PlxuICAgICAgICAgICAgICBBY3Rpb25zXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZmlsdGVyZWRGaWxlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfSBzdHlsZT17eyBwYWRkaW5nOiAnMzJweCAxMnB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6ICcjODg4JyB9fT5cbiAgICAgICAgICAgICAgICB7ZmlsZXMubGVuZ3RoID09PSAwID8gJ05vIGZpbGVzIHVwbG9hZGVkIHlldC4nIDogJ05vIGZpbGVzIG1hdGNoIHlvdXIgc2VhcmNoLid9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBmaWx0ZXJlZEZpbGVzLm1hcCgoZmlsZTogYW55LCBpZHg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtpZHh9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMzMzJyB9fT5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEycHgnLCBmb250U2l6ZTogJzEzcHgnLCBjb2xvcjogJyNmZmYnIH19PlxuICAgICAgICAgICAgICAgICAge2ZpbGUubmFtZX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTJweCcsIGZvbnRTaXplOiAnMTNweCcsIGNvbG9yOiAnIzk5OScgfX0+XG4gICAgICAgICAgICAgICAgICB7ZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEycHgnLCBmb250U2l6ZTogJzEzcHgnIH19PlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17ZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMzQTJFNScsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEycHgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBWaWV3XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtmaWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzM0EyRTUnLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmlsZVVwbG9hZFBhZ2UiLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJ1cGxvYWRpbmciLCJzZXRVcGxvYWRpbmciLCJmaWxlcyIsInNldEZpbGVzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJmZXRjaEZpbGVzIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJoYW5kbGVVcGxvYWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJvayIsImVycm9yIiwiY29uc29sZSIsImRhdGEiLCJqc29uIiwiZmlsdGVyZWRGaWxlcyIsImZpbHRlciIsImZpbGUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImJhY2tncm91bmQiLCJjb2xvciIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImdhcCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsInZhbHVlIiwid2lkdGgiLCJib3JkZXJDb2xsYXBzZSIsImJvcmRlckJvdHRvbSIsInRleHRBbGlnbiIsImxlbmd0aCIsIm1hcCIsImlkeCIsInVybCIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9