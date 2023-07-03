$(() => {
    const viewportWidthIsValid = (): boolean => window.innerWidth >= 380 && window.innerWidth <= 450;
    const resultResolutionCheck: JQuery<HTMLElement> = $('#result-resolution-check');
  
    const updateResolutionCheck = (): void => {
        const isValid: boolean = viewportWidthIsValid();
        const text: string = isValid ? 'Resolução válida' : 'Resolução inválida';
    
        resultResolutionCheck.text(`${text}: ${window.innerWidth}px`)
            .removeClass(isValid ? 'text-danger' : 'text-success')
            .addClass(isValid ? 'text-success' : 'text-danger');
    };
  
    window.addEventListener('load', updateResolutionCheck);
    window.addEventListener('resize', updateResolutionCheck);
});