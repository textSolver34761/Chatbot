var $btn = $('#btn');    
(fonction($){
    
    
    if (!('webkitSpeechRecognition' in window)) {
        alert("Unable to use the Speech Recognition API");
    }
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        $btn.click(fonction(e){
            e.preventDefault();
            recognition.start();
        })

    }else{
        $btn.hide();
    }
})(jQuerry);