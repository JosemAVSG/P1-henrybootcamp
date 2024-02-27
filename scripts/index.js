class Activity {
    constructor(id,title,description,imgurl){
        this.Id=id,
        this.Title=title,
        this.Description=description,
        this.ImgUrl=imgurl
    }
}

class Repository {
    constructor (){
        this.activities = []
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(id,name,description,imgurl){

        const activity = new Activity(id,name,description,imgurl);
        this.activities.push(activity);
    }
    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.Id !== id);
    }
}

const repo = new Repository();
const d = document;

const createActivity = (activity)=>{
    const {Id, Title, Description, ImgUrl  } = activity;

    const card = d.createElement("div");
    card.classList.add("card");

    const imagen = d.createElement("img");
    imagen.src = ImgUrl;
    card.appendChild(imagen);

    const nombre = d.createElement("h5");
    nombre.textContent = Title;
    card.appendChild(nombre);

    const descripcion = d.createElement("p");
    descripcion.textContent = Description;
    card.appendChild(descripcion);

    // Botón para eliminar actividad
    const deleteButton = d.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => {
        repo.deleteActivity(Id);
        tarjetasActividades.removeChild(card);
    });
    card.appendChild(deleteButton);

    return card;

}

const renderActivities = ()=> {
    const activities = repo.getAllActivities();

    const tarjetasActividades = d.getElementById("tarjetasActividades");
    tarjetasActividades.innerHTML = "";

    const activityElements = activities.map(activity => createActivity(activity));

    activityElements.forEach(activityElement => {
        tarjetasActividades.appendChild(activityElement);
    });

}

d.getElementById("actividadForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const nombreActividad = d.getElementById("nombreActividad").value;
    const descripcionActividad = d.getElementById("descripcionActividad").value;
    const linkImagen = d.getElementById("linkImagen").value;

    if (nombreActividad === "" || descripcionActividad === "" || linkImagen === "") {
        alert("Por favor completa todos los campos.");
        return;
    }
    const id = repo.getAllActivities().length + 1; 
    repo.createActivity(id,nombreActividad,descripcionActividad,linkImagen)

    renderActivities();
    d.getElementById("actividadForm").reset();
});


module.exports={Activity,Repository}