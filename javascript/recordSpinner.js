/* function spinRecord (record) {
    document.getElementById(record).translate(0, 100);
} */


    /* let height = document.getElementById(record).style.height
    document.getElementById(record).style.height = height - 250; */


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
