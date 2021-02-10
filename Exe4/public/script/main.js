$(document).ready(function () {  
    $('#form').on('submit', function (e) {
        e.preventDefault();
        const inputs = $('input');
        let data = { firstName: inputs[0].value, lastName: inputs[1].value, userName: inputs[2]};

        $.ajax({
            type: "POST",
            url: "'http://localhost:3000/user/getUser", 
            
            success: function (response) {
                handler(response);
                
            }
        
        });

    });
});

function handler(obj) {
    let message = $('.footer');

    for (const arg of obj) {
        message.innerHTML = 
        `<p>First Name: ${arg.firstName}</p>
        <p>Last Name: ${arg.lastName}</p>
        <p>Username: ${arg.userName}</p>
        <p>Position: ${arg.position}</p>
        <p>City: ${arg.city}</p>`

    }
}