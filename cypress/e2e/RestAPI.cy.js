describe("Get User Profile", () => {
	context("Success", () => {
		it("return 200", () => {
			cy.request("GET", "https://reqres.in/api/users/12").then((response) => {
				expect(response.status).to.equal(200);
				expect(response.body).to.deep.equal({
					data: {
						id: 12,
						email: "rachel.howell@reqres.in",
						first_name: "Rachel",
						last_name: "Howell",
						avatar: "https://reqres.in/img/faces/12-image.jpg",
					},
					support: {
						url: "https://reqres.in/#support-heading",
						text: "To keep ReqRes free, contributions towards server costs are appreciated!",
					},
				});
			});
		});
	});
});

describe("Get User Profile fail", () => {
	context("Failure", () => {
		it("return 404", () => {
			cy.request({
				method: "GET",
				url: "https://reqres.in/api/users/999",
				// บรรทัดนี้ไม่ควรใส่เลยควรปล่อยแดง
				failOnStatusCode: false,
			}).then((response) => {
				expect(response.status).to.equal(404);
			});
		});
	});
});
