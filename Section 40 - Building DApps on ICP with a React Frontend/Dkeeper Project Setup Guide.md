**Dkeeper Project Setup Guide**

Follow these steps to run the project successfully:

### **1. Unzip the Project Folder**

Extract the zipped file and open the project folder in **Visual Studio Code**. Make sure you are running **WSL: Ubuntu** in the bottom left corner of VS Code. If not, switch to the correct WSL environment before proceeding.

### **2. Delete Folder and Files**

To ensure a clean installation of dependencies, remove the `node_modules` folders and , `.dfx`, `package-lock.json` files manually. If you encounter issues deleting them, use the terminal to forcefully remove them with the following commands:

```sh
rm -rf node_modules
rm -rf src/dkeeper_frontend/node_modules
rm -rf .dfx/
rm -rf package-lock.json
```

⚠️ **Make sure you are in the correct project directory before running these commands. Use ********************`pwd`******************** to verify your location. Deleting the wrong files can cause issues. Proceed with caution!**

### **3. Install Project Dependencies**

Once you have removed the necessary folders and files, install the required dependencies using the following command:

```sh
npm install
```

To fix any potential security vulnerabilities, run:

```sh
npm audit fix
```

### **4. Start the Local DFX Replica**

Use the following command to start the local DFX development environment:

```sh
dfx start 
```

### **5. Deploy Canisters**

Run the following command to deploy the project:

```sh
dfx deploy
```

You can continue using the same terminal for the next steps.

### **6. Install Dependencies Again**

Run the following command to ensure all dependencies are installed properly:

```sh
npm install
```

*(This step ensures no missing packages due to deployment.)*

### **7. Run the Project**

Finally, start the project:

```sh
npm start
```

### **8. Open the Project in the Browser**

Once the project is running, it will provide a local URL in the terminal (e.g., `http://localhost:8080`). Open the given URL in your browser to access the application.

---

Now your **Dkeeper** project should be up and running! 🚀

