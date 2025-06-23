# user-detail-frontend-app

A frontend built with next js and react that allow user to upload user details such as "FirstName", "lastName", "DOB" and image/pdf file and see the processed details like
fullName, Age, text(Extracted)
```
##Architectural Summary(Nextjs+App Router+React)

    Layer                           Responsibility

    /src/app/layout.tsx                        Global layout, wraps Header , footer, providers 
    /src/app/upload/page.tsx                   Upload Page: UI page for Form Submission
    src/app/display/page.tsx                   Display Page: UI page to show uploaded result
    /src/components/upload/UploadForm          Form Component:  Accepts file + user data and call context function
    /src/components/upload/UploadForm          Display Component: format and display parsed results
    /src/context/UploadContext.ts              Shared app state : handles API call to backend , stores uploaded results
    /src/lib/api.ts                             Handles raw axios logic
    /src/lib/apiUrl.ts                          Contains api config
    /src/providers                               Contain providers ex- Taost Providers

```

# RUN Locally
1. npm install
2. npm run dev


# Tools And Stack
1. Next js 15+ 
2. React
3. TAilwind CSS
4. Typescript
5. axios

# Best Practices Followed
1. Modular component organization
2. Centralized API layer
3. App router for clean routing
4. context to manage shared state

# Optional Enhancements
1. Testing
2. Docker

# License: MIT

# Author: Sadaf Ahmad
