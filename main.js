function validAge() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    let regexd = /^\d{1,2}$/;
    let regexm = /^\d{1,2}$/;
    let regexy = /^\d{4}$/;
    if (regexd.test(day) && regexm.test(month) && regexy.test(year)) {
        return calculateAge()
    } else {
        alert('please enter a valid date ex:dd/mm/yyyy')
    }

    function calculateAge() {
        var dateOfBirth = new Date(year, month - 1, day);
        var today = new Date();
        console.log(today)

        if (dateOfBirth > today) {
            alert("Invalid date of birth");
            return false;
        }

        var ageInMilliseconds = today.getTime() - dateOfBirth.getTime();
        var ageDate = new Date(ageInMilliseconds);

        var years = Math.abs(ageDate.getFullYear() - 1970);
        var months = ageDate.getMonth();
        var days = ageDate.getDate() - 1;

        document.getElementById("result").innerHTML = years + "<span style='color:black'>years</span><br>" + months + "<span style='color:black'>months</span><br>" + days + "<span style='color:black'>days</span>";

    }
}