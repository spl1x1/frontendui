import { useMemo } from "react"
import { Table as BaseTable, KebabMenu } from "../../../../_template/src/Base/Components/Table"
import { Link } from "./Link"
import { UpdateLink, UpdateButton } from "../Mutations/Update"
import { DeleteButton } from "../Mutations/Delete"

/**
 * Vytvoří definici sloupců pro tabulku Subject.
 * Tato definice určuje:
 * - Které sloupce se zobrazí
 * - Pořadí sloupců
 * - Jak se vykreslí každá buňka
 * - Nástroje (Detail, Editovat, Smazat)
 */
const buildSubjectTableDef = (data) => {
    if (!data || data.length === 0) return {}

    return {
        name: {
            label: "Název",
            component: ({ row }) => (
                <td>
                    <Link item={row}>{row?.name || "Bez názvu"}</Link>
                </td>
            )
        },
        nameEn: {
            label: "Anglický název",
            component: ({ row }) => (
                <td>{row?.nameEn || ""}</td>
            )
        },
        program: {
            label: "Program",
            component: ({ row }) => (
                <td>{row?.program?.name || row?.programId || ""}</td>
            )
        },
        semesters: {
            label: "Semestrů",
            component: ({ row }) => (
                <td>{row?.semesters?.length || 0}</td>
            )
        },
        tools: {
            label: "Nástroje",
            component: ({ row }) => (
                <td>
                    <KebabMenu actions={[
                        {
                            children: (
                                <Link
                                    className="btn btn-sm btn-outline-secondary border-0 text-start w-100"
                                    item={row}
                                >
                                    Detail
                                </Link>
                            )
                        },
                        {
                            children: (
                                <UpdateLink
                                    className="btn btn-sm btn-outline-secondary border-0 text-start w-100"
                                    item={row}
                                    action="edit"
                                >
                                    Editovat
                                </UpdateLink>
                            )
                        },
                        {
                            children: (
                                <DeleteButton
                                    className="btn btn-sm btn-outline-danger border-0 text-start w-100"
                                    item={row}
                                    rbacitem={row?.rbacobject}
                                >
                                    Smazat
                                </DeleteButton>
                            )
                        },
                    ]} />
                </td>
            )
        }
    }
}

export const Table = ({ data }) => {
    const tableDef = useMemo(() => buildSubjectTableDef(data), [data])

    return (
        <BaseTable data={data} table_def={tableDef} />
    )
}