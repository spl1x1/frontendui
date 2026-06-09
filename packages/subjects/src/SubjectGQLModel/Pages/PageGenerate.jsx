
import { Row } from "../../../../_template/src/Base/Components/Row";
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared";
import { PageBase } from "./PageBase"; //Page base - nepotřebuje id itemu


//<CreateBody {...props} />
//
const PageBody = ({...props}) => (
  <Row>
        <LeftColumn />
        <MiddleColumn>
          Test
        </MiddleColumn>
    </Row>
)

export const PageGenerate = ({
    SubPage=PageBody,
    ...props
}) => {
    return (
        <PageBase {...props}>
            <SubPage {...props} />
        </PageBase>
    )
}
