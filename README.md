![Screenshot 2025-01-04 144112](https://github.com/user-attachments/assets/f591e409-39fe-4162-bfc8-7979e4462598)
![Screenshot 2025-01-04 144141](https://github.com/user-attachments/assets/857ecaab-7375-45ec-a7ed-e1548237e4dd)
# Web Push Notification Demo

This project demonstrates the implementation of web push notifications using JavaScript. It allows users to input a message and receive a browser notification displaying that message.

## Features

- **User Input Validation:** Ensures the message input is not empty before sending a notification.
- **Browser Notification:** Utilizes the Notification API to display messages to the user.
- **Permission Handling:** Requests notification permissions from the user and handles cases where permissions are denied.

## Getting Started

### Prerequisites

- A modern web browser that supports the Notification API.

### Running the Application

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/dev-kant-kumar/Notification.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Notification
   ```

3. **Open the `index.html` File:**

   - Double-click the `index.html` file, or
   - Right-click the file and select "Open with" followed by your preferred web browser.

   This will open the application in your default web browser.

## Usage

1. **Enter a Message:**

   In the input field labeled "Message," type the message you wish to receive as a notification.

2. **Submit the Message:**

   Click the "Submit" button to send the message. If the input is empty, an error message will appear.

3. **Receive Notification:**

   - If it's your first time using the application, the browser will prompt you to allow notifications. Click "Allow" to enable notifications.
   - Once permissions are granted, a notification with your message will appear, displaying the content you entered.

## Code Overview

- **HTML (`index.html`):** Contains the structure of the webpage, including the input field and submit button.
- **CSS (`styles.css`):** Provides basic styling for the webpage elements.
- **JavaScript (`script.js`):** Handles user interactions, input validation, and manages the Notification API to display messages.

## Browser Compatibility

This application relies on the Notification API, which is supported in most modern browsers. Ensure that your browser settings allow notifications for this application to function correctly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
