import {Row, Col, Card} from 'react-bootstrap'

export default function Dashboard() {
    return(
        <>
            <h2 className="fw-bold mb-4">Dashboard</h2>

            <Row className='g-4'>

                <Col md={4}>
                    <Card body>

                        <small className='text-muted'>
                            Total recebido
                        </small>

                        <h3 className='text-success'>
                            R$ 0,00
                        </h3>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card body>
                        <small className='text-muted'>A receber</small>
                        <h3 className='text-warning fw-bold'>
                            R$ 0,00
                        </h3>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card body>
                        <small className='text-muted'>
                            Lucros
                        </small>

                        <h3 className='text-primary fw-bold'>
                            R$ 0,00
                        </h3>
                    </Card>
                </Col>
            </Row>
        </>
    )
}