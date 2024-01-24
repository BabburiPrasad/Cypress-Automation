class LoginPOM{

    Login_Elements = {
        getLognbutton: () => cy.get(':nth-child(10) > .nav-link'),
        selectLogntype: () => cy.xpath("//a[normalize-space()='Student Access']"),
        getUserNametextbutton: () => cy.get('#user'),
        getPasswordtextbutton: () => cy.get('#password'),
        getLoginButton: () => cy.xpath("//button[normalize-space()='Log In']"),
        //getOtptextbox: () => cy.xpath("//input[@class='form-control']"),
        getLoginbutton2: () => cy.xpath("//button[@class='btn btn-primary mt-2 btn-medium w-75']"),

    }

    clickonLogintypebutton()
    {
        this.Login_Elements.getLognbutton().click();
    }

    selectLogintype()
    {
        this.Login_Elements.selectLogntype().click();
    }

    clickonUserNametextbox(UserName)
    {
        this.Login_Elements.getUserNametextbutton().clear();
        this.Login_Elements.getUserNametextbutton().type(UserName);
    }

    clickonPasswordtextbox(Password)
    {
        this.Login_Elements.getPasswordtextbutton().clear();
        this.Login_Elements.getPasswordtextbutton().type(Password);
    }

    clickonLoginbutton()
    {
        this.Login_Elements.getLoginButton().click();
    }

    clickonLoginbutton2()
    {
        this.Login_Elements.getLoginbutton2().click();
    }

    generatestring() {

        let r = (Math.random()).toString(36).substring(10);

        console.log("random", r);

        return r
    }
}

export default LoginPOM;