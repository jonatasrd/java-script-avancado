class NegociacoesView {

    constructor(element){
        this._element = element;
    }
    _template(negociacoes) {
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
                    ${negociacoes.map( it =>`
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
                        <td>${negociacoes.reduce((total, it) => total + it.volume, 0.0)}</td>
                    </tr>
                <tfoot>
                </tfoot>
            </table>
        `
    }

    update(negociacoes){
        this._element.innerHTML = this._template(negociacoes)
    }
}