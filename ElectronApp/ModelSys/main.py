from tensorflow.keras.models import load_model
from joblib import load
import numpy as np

def cosine_similarity(vector1, vector2):
    dot_product = np.dot(vector1, vector2)
    norm1 = np.linalg.norm(vector1)
    norm2 = np.linalg.norm(vector2)
    if norm1 == 0 or norm2 == 0:
        return np.array(0.0)
    similarity = dot_product / (norm1 * norm2)
    return similarity

model = load_model('trained_model/MIX_11k_40dim_V2.keras', compile=False)

def custom_analyzer(doc):
    return doc

cardVec = load('matrix_data/cardVecTF_MIX_11k_40dim.joblib')
deckVecorizer = load('matrix_data/deckVectorizer_MIX_11k_30K.joblib')

# input ex: ="Strike_R,Strike_R,Strike_R,Strike_R,Strike_R,Defend_R,Defend_R,Defend_R,Defend_R,Defend_R,Bash,Anger"
tmp=""
try: tmp=input()
except EOFError: pass
ic_smaple = [tmp.strip().split(',')]

sampleVec = deckVecorizer.transform(ic_smaple).toarray()
sample_pred = model.predict(sampleVec,verbose=0)

sample_sim= list()
for card, vector in cardVec.items():
    sample_sim.append( (card,cosine_similarity(sample_pred, vector)) )

tmp=[float(i[1]) for i in sample_sim]
tmp1=[i[0] for i in sample_sim]
print(','.join([tmp1[i] for i in list(np.argsort(tmp)[:][::-1])]),end="")