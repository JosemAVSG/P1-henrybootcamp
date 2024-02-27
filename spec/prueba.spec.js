// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
 const { Repository, Activity } = require("../scripts/index.js");
describe("La clase Repository", () => {
  let repo;
  beforeEach(() => {
    repo = new Repository();
  });

  it("Debe ser una clase", () => {
    expect(typeof Activity.prototype.constructor).toBe("function");
    expect(typeof Repository.prototype.constructor).toBe("function");
  });

  it("Debe tener el motodo createActivity", () => {
    expect(repo.createActivity).toBeDefined();
  });

  it("Debe tener el motodo deleteActivity", () => {
    expect(repo.deleteActivity).toBeDefined();
  });
  it("Debe tener el motodo getAllactivities", () => {
    expect(repo.getAllActivities).toBeDefined();
  });

  it("Debería agregar un elemento a la lista", () => {
    const id = 1;
    const title = "prueba";
    const description = "prueba";
    const imgUrl = "https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es-800x420.jpg";
    const expectedActivity = new Activity(id, title, description, imgUrl);

    repo.createActivity(id, title, description, imgUrl);

    expect(repo.getAllActivities()).toContain(expectedActivity);
  });
  it("Deberia eliminar el ultimo elemento de la lista", () => {
    repo.createActivity(1, "prueba1", "prueba1","https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es-800x420.jpg");
    repo.createActivity(2, "prueba2", "prueba2", "https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es-800x420.jpg");
    repo.createActivity(3, "prueba3", "prueba3","https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es-800x420.jpg");
    repo.deleteActivity(3);
    
    expect(repo.getAllActivities()).not.toContain(3, "prueba3", "prueba3","https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es-800x420.jpg");
  });
  it("Deberia retornar una lista de elementos", () => {
    expect(Array.isArray(repo.getAllActivities())).toBeTrue();
  });
});
describe("La clase Activity", () => {
  let acti;
  beforeEach(() => {
    acti = new Activity();
  });

  it("Debe ser una clase", () => {
    expect(typeof Activity.prototype.constructor).toBe("function");
  });

  it("Debe crear un objeto Activity con las propiedades proporcionadas", () => {
    const id = 1;
    const title = "Actividad 1";
    const description = "Descripción de la actividad 1";
    const imgUrl = "https://example.com/image.jpg";

    const activity = new Activity(id, title, description, imgUrl);

    expect(activity.Id).toBe(id);
    expect(activity.Title).toBe(title);
    expect(activity.Description).toBe(description);
    expect(activity.ImgUrl).toBe(imgUrl);
  });
});
