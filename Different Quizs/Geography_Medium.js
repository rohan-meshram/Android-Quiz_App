import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'

const shuffleArray = (array) => {
    for (let i = array.length - 1; i>0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
}

const Quiz = () => {

    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const getQuiz = async () => {
        setIsLoading(true)
        const url = 'https://opentdb.com/api.php?amount=15&category=22&difficulty=medium&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json(); //imp step to jSONyfied data in API
        //   console.log(res);   <-------- to check
        console.log(data.results[0]);
        //   console.log(data);  <-------- to check
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]));
        setIsLoading(false)
    }

    useEffect(() => {
        getQuiz();
    }, [])

    const handleNextPress = () => {
        setQues(ques + 1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]));
    }

    const generateOptionsAndShuffle = (_question) => {
        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer,)
      //  console.log(options, "Before");
        shuffleArray(options);
     //   console.log(options, "After");
     return options
    }

    const handleSelectedOption = (_option) => {
        if (_option===questions[ques].correct_answer){
            setScore(score+10)
        }
        if (ques !== 14) {
            setQues(ques + 1)
            setOptions(generateOptionsAndShuffle(questions[ques+1]));
            console.log(_option===questions[ques].correct_answer);
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
            {isLoading ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 32, fontFamily: 'JosefinSans-SemiBold', color: '#184E77'}}>Loading...</Text>
            </View> : questions && (
                <View style={{ height: '100%' }}>
                    <View style={styles.top}>
                        <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}</Text>
                    </View>
                    <View style={styles.optionss}>
                        <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[0])}>
                            <Text style={styles.option}>a. {decodeURIComponent(options[0])}</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[1])}>
                            <Text style={styles.option}>b. {decodeURIComponent(options[1])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[2])}>
                            <Text style={styles.option}>c .{decodeURIComponent(options[2])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[3])}>
                            <Text style={styles.option}>d .{decodeURIComponent(options[3])}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        {/* <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>PREV</Text>
                        </TouchableOpacity> */}
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

export default Quiz

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: '#B5E48C'
    },
    question: {
        fontSize: 30,
        fontFamily: 'JosefinSans-Medium',
        color: '#184E77',
    },
    top: {
        marginVertical: 40,
    },
    optionButton: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginVertical: 10,
        backgroundColor: '#52B69A',
        borderRadius: 12
    },
    optionss: {
        marginVertical: 16,
        flex: 1
    },
    option: {
        fontSize: 19,
        paddingLeft: 12,
        fontFamily: 'JosefinSans-Regular',
        color: '#184E77'
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        padding: 12,
        paddingHorizontal: 16,
        backgroundColor: '#1A759F',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'JosefinSans-Regular'
    }
})