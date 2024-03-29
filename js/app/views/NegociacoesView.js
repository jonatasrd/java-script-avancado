class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map( it =>`
                        <tr>
                            <td>${DateHelper.dateToText(it.data)}</td>
                            <td>${it.quantidade}</td>
                            <td>${it.valor}</td>
                            <td>${it.volume}</td>
                        </tr>
                    `).join('')}
                </tbody>
                    <tr>
                        <td colspan=3></td>
                        <td>${model.negociacoes.reduce((total, it) => total + it.volume, 0.0)}</td>
                    </tr>
                <tfoot>
                </tfoot>
            </table>
        `
    }
}