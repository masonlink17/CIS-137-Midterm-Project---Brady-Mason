    function spinRecord(recordId) {
        var recordSpin = document.getElementById(recordId);
        if (recordSpin) {
            recordSpin.style.transform = "translateY(-350px)";
        }
    }

    function spinRecordDown(recordId) {
        var recordSpin = document.getElementById(recordId);
        if (recordSpin) {
            recordSpin.style.transform = "translateY(-250px)";
        }
    }
