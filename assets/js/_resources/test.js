
fetch('http://localhost/testResponse/index.php')
    .then(response => response.text())
    .then(yed => {
        let parsed = JSON.parse(yed);
        console.log(parsed.message)
    })

