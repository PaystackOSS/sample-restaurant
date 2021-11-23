# Sample Restaurant
This app simulates an in-person experience in a restaurant where a customer comes in, selects their meals, and completes payment without the intervention of the restaurant's staff.

## Prerequisite
1. **Terminal**
    
    You need a Paystack Terminal to complete the payment flow of this app. Kindly make a request via support@paystack.com

2. **Gatsby cloud**

    Gatsby functions was used for all API calls to Paystack. You'll need a [Gatsby Cloud](https://www.gatsbyjs.com/cloud/) account if you want to deploy your copy of this site

    [<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/PaystackOSS/sample-restaurant)

3. **Pusher account**

    Pusher was used to manage real-time updates on payment completion. You'll need to create a [Pusher Channel](https://pusher.com/channels) to use this feature. Alternatively, you can implement websockets.

## 🚀 Getting started

1.  **Clone  the project**

    ```shell
    git clone git@github.com:PaystackOSS/sample-restaurant.git
    ```

2.  **Start developing**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd sample-restaurant/
    yarn
    yarn develop
    ```

3.  **Open the code and start customizing!**

    Your site should be running at http://localhost:8000!
    
    You should add your environment variable in your `.env` file. Kindly check the `.env.sample` file  for the required environment variables. 

