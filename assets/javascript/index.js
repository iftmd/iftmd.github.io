document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('button').forEach(function(button){
        button.onclick = () => {
            document.querySelector('h1').style.color = button.dataset.color;
            document.getElementById('buttons').style.textAlign = "center";
        }
    });
});