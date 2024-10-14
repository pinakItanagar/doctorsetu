Cure Assist WebService Documentation

1. USER API's
    1. Registration 
        API URL: users/mobileregister 
        Method: POST 
        BodyType: JSON Body
        Content: { "mobile":"917022571084" }
    2. Set Password 
        API URL: /users/setpassword 
        Method: POST 
        BodyType: JSON Body
        Content: { "otp":"891534","password":"test" }
    3. Forgot Password
        API URL: /users/forgotpassword
        Method: POST 
        BodyType: JSON Body
        Content: { "loginID":"917022571084" }
    4. Reset Password
        API URL: /users/resetpassword
        Method: POST
        BodyType: JSON Body
        Content: { "otp":"891534","password":"test" }
    5. Login
        API URL: /users/login
        Method: POST
        BodyType: JSON Body
        Content: { "loginID":"917022571084","password":"test" }