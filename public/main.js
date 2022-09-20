const socket = io();

const socketID = document.getElementById("socketid");
//const nayan = document.getElementById("data");
socket.on("nayan",({nayan, socketID}) => {
    console.log(nayan, socketID);
    socketid.innerHTML = socketID;
    let newData = nayan[0];

    window.firstname = newData.firstname;
    window.lastname = newData.lastname;
    window.mobile_no = newData.mobile_no;
    window.email = newData.email;
    window.address = newData.address;
    // window.city = newData.city;
    // window.state = newData.state;
    // window.country = newData.country;
    window.loginid = newData.loginid;
});

function myfun() {
    alert(`User information:
    First name = ${firstname}
    Last name = ${lastname}
    mobile_no = ${mobile_no}
    email = ${email}
    address = ${address}
    loginid = ${loginid}
    `);
};

