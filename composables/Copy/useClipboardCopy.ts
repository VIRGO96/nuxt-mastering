export function useClipboardCopy(){
    function copyToClipboard(text:string){
        navigator.clipboard.writeText(text);
        console.log('Copied',text);
    }
    return {copyToClipboard}
}