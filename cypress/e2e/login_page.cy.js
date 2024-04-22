describe("Login", () => {
	it("Login Success", () => {
		cy.visit("http://the-internet.herokuapp.com/login");
		cy.get('input[id="username"]').type("tomsmith");
		cy.get('input[id="password"]').type("SuperSecretPassword!");
		cy.get('button[type="submit"]').click();
		cy.contains("You logged into a secure area!").should("exist");
		// บรรทัดนี้ถ้าจะเช็คปุ่ม logout
		cy.url().should("include", "/secure");
		// เปิดบรรทัดนี้ถ้าจะเช็คปุ่ม logout
		// cy.contains("Logout").click();
		// cy.contains("You logged out of the secure area!").should("exist");
		// cy.url().should("include", "/login");
	});

	it("Login Failed - Password Incorrect", () => {
		cy.visit("http://the-internet.herokuapp.com/login");
		cy.get('input[id="username"]').type("tomsmith");
		cy.get('input[id="password"]').type("อิหยังเนี่ย");
		cy.get('button[type="submit"]').click();
		cy.url().should("include", "/login");
		cy.contains("Your password is invalid!").should("exist");
	});

	it("Login Failed - Username Not Found", () => {
		cy.visit("http://the-internet.herokuapp.com/login");
		cy.get('input[id="username"]').type("อิหยังเนี่ย");
		cy.get('input[id="password"]').type("SuperSecretPassword!");
		cy.get('button[type="submit"]').click();
		cy.url().should("include", "/login");
		cy.contains("Your username is invalid!").should("exist");
	});
});
