import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import {
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButtoon,
    AddLabel,
    UseTicketContainer,
    UseTicketButton,
    UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png'

export default function Home() {
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Header
                colors={
                    useBalance
                        ? ['#52e78c', '#1abc63']
                        : ['#d3d3d3', '#868686']
                }
            >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '154.481.45,00' : '-,--'}</Bold>
                        </Value>

                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>

                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>
                    Use saldo ao pagar
                </UseBalanceTitle>

                <Switch
                    value={useBalance}
                    onValueChange={handleToggleUseBalance}
                />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>
                    Forma de Pagamento
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartão de crédito
                            </CardTitle>

                            <CardInfo>
                                Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                            </CardInfo>
                        </CardDetails>

                        <Img source={creditCard} resizeMode="contain" />
                    </CardBody>

                    <AddButtoon>
                        <AntDesign name="pluscircleo" size={30} color="#0db060" />
                        <AddLabel>Adicionar cartão de crédito</AddLabel>
                    </AddButtoon>
                </Card>

                <UseTicketContainer>
                    <UseTicketButton>
                        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
                        <UseTicketLabel>
                            Usar código promocional
                        </UseTicketLabel>
                    </UseTicketButton>
                </UseTicketContainer>
            </PaymentMethods>
        </Wrapper>
    );
}
