// Hacer una solicitud para obtener los usuarios cuando la página se carga
window.onload = function() {
  fetch('http://localhost:8000/usuarios/')
    .then(response => response.json())
    .then(data => {
      // Aquí tienes los datos de los usuarios
      console.log(data);

      // Renderizar los usuarios en una lista
      const userList = document.getElementById('usuarios');

      data.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nombre: ${user.nombre}, Email: ${user.email}`;
        userList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error al obtener los usuarios:', error);
    });
};
