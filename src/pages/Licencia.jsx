
export function Licencia() {
    return (
        <div>
            <h1>Proyecto de codigo Abierto</h1>
            <p>
                Este proyecto se considera como parte
                del movimiento del opensourde por lo cual
                esta bajo la licencia de GPL con lo cual
                pudes estar tranquilo al usar esta plantilla y
                tambien tiene acceso al codigo fuente de la misma
                en el repositorio de github
            </p>
            <p>
                {{ project }}
                Copyright (C) {{ year }}  {{ organization }}

                This program is free software: you can redistribute it and/or modify
                it under the terms of the GNU Affero General Public License as published by
                the Free Software Foundation, either version 3 of the License, or
                (at your option) any later version.

                This program is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                GNU Affero General Public License for more details.

                You should have received a copy of the GNU Affero General Public License
                along with this program.  If not, see shttp://www.gnu.org/licenses/
            </p>
        </div>
    )
}