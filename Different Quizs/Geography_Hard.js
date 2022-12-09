import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Geography_Hard = () => {

    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    const getGeo_Hard = async () => {
        setIsLoading(true)
        const url = 'https://opentdb.com/api.php?amount=15&category=22&difficulty=hard&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results[0]);
        // console.log(data.results[1]);
        //  console.log(data.results[2]);
        // console.log(data.results[3]);
        //console.log(data);
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]));
        setIsLoading(false)
    }

    useEffect(() => {
        getGeo_Hard();
    }, [])

    const handleNextPress = () => {
        setQues(ques + 1)
        setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }

    const generateOptionsAndShuffle = (_question) => {
        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer,)
        shuffleArray(options);
        return options
    }

    const handleSelectedOption = (_option) => {
        if (_option === questions[ques].correct_answer) {
            setScore(score + 10)
        }
        if (ques !== 14) {
            setQues(ques + 1)
            setOptions(generateOptionsAndShuffle(questions[ques + 1]));
            console.log(_option === questions[ques].correct_answer);
        }
        if (ques === 14) {
            handleShowResult()
        }
    }

    const navigation = useNavigation();

    const handleShowResult = () => {
        navigation.navigate('Result', {
            score: score
        })
    }

    return (
        <View style={styles.container}>
            {isLoading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontSize: 32, fontFamily: 'JosefinSans-SemiBold', color: '#184E77' }}>Loading...</Text>
            </View> : questions && (
                <View style={{ height: '100%' }}>
                    <View style={styles.top}>
                        <Text style={styles.questionText}>Q. {decodeURIComponent(questions[ques].question)}</Text>
                    </View>
                    <View style={styles.optBoxes}>
                        <TouchableOpacity style={styles.optButton} onPress={() => handleSelectedOption(options[0])}>
                            <Text style={styles.options}>a. {decodeURIComponent(options[0])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optButton} onPress={() => handleSelectedOption(options[1])}>
                            <Text style={styles.options}>a. {decodeURIComponent(options[1])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optButton} onPress={() => handleSelectedOption(options[2])}>
                            <Text style={styles.options}>a. {decodeURIComponent(options[2])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optButton} onPress={() => handleSelectedOption(options[3])}>
                            <Text style={styles.options}>a. {decodeURIComponent(options[3])}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        {ques !== 14 && <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                            <Text style={styles.buttonText}>SKIP</Text>
                        </TouchableOpacity>}
                        {ques === 14 && <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                            <Text style={styles.buttonText}>SHOW RESULT</Text>
                        </TouchableOpacity>}
                    </View>
                </View>
            )}
        </View>
    )
}

export default Geography_Hard

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: '#B5E48C',
        height: '100%'
    },
    questionText: {
        fontSize: 30,
        fontFamily: 'JosefinSans-Medium',
        color: '#184E77',
        //   paddingTop: 20
    },
    top: {
        marginVertical: 40
    },
    optBoxes: {
        flex: 1,
        marginVertical: 16
    },
    optButton: {
        marginVertical: 10,
        padding: 12,
        backgroundColor: '#52B69A',
        borderRadius: 12,
    },
    options: {
        fontSize: 19,
        paddingLeft: 12,
        fontFamily: 'JosefinSans-Regular',
        color: '#184E77'
    },
    bottom: {
        justifyContent: 'space-between',
        marginBottom: 12,
        paddingVertical: 16,
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#1A759F',
        padding: 12,
        borderRadius: 16,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'JosefinSans-Regular'
    }
})