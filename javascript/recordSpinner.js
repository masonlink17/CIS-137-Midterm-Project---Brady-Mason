    function spinRecord(recordId) {
        var recordSpin = document.getElementById(recordId);
        if (recordSpin) {
            /* recordSpin.style.transition = "transform 0.5s ease"; */
            recordSpin.style.transform = "translateY(-350px) rotate(360deg)";
        }
    }


    function spinRecordDown(recordId) {
        var recordSpin = document.getElementById(recordId);
        if (recordSpin) {
            /* recordSpin.style.transition = "transform 0.5s ease"; */
            recordSpin.style.transform = "translateY(-250px) rotate(-360deg)";
        }
    }
